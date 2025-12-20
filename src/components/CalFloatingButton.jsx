import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";

export default function CalFloatingButton() {
  const location = useLocation();
  const calRef = useRef(null);

  const showOnlyOnRoutes = ["/enquiries"];
  const isVisible = showOnlyOnRoutes.includes(location.pathname);

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: "discovery-call" });
      calRef.current = cal;

      cal("ui", {
        theme: "dark",
        styles: {
          branding: { brandColor: "#000000ff" },
          enabled: true,
        },
      });
    })();

    // Cleanup when component unmounts
    return () => {
      document.body.classList.remove("cal-modal-open");
      document.body.style.background = "";
    };
  }, []);

  const openCal = () => {
    if (!calRef.current) return;

    // Force white background before modal opens
    document.body.style.background = "#ffffff";

    calRef.current("modal", {
      calLink: "marqwon/discovery-call",
      config: {
        layout: "month_view",
        theme: "dark",
        hideBranding: true,
      },
    });
  };

  if (!isVisible) return null;

  return (
    <button
      onClick={openCal}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 bg-black text-white px-6 py-4 rounded-full shadow-2xl hover:scale-110 transition-all cursor-pointer active:scale-95"
    >
      <Calendar className="w-6 h-6" />
      <span className="hidden md:inline font-medium text-lg">
        Book my Cal
      </span>
    </button>
  );
}
