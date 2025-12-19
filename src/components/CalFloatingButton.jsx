import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { getCalApi } from "@calcom/embed-react";
import { Calendar } from "lucide-react";

export default function CalFloatingButton() {
  const location = useLocation();
  const calRef = useRef(null);

  // ✅ Pages where button SHOULD appear
  const showOnlyOnRoutes = ["/enquiries"];
  const isVisible = showOnlyOnRoutes.includes(location.pathname);

  // ✅ Init Cal ONLY ONCE
  useEffect(() => {
    if (calRef.current) return;

    (async () => {
      calRef.current = await getCalApi({ namespace: "discovery-call" });
      calRef.current("ui", { theme: "light" });
    })();
  }, []);

  // ✅ Open Cal modal
  const openCal = () => {
    if (!calRef.current) return;

    calRef.current("modal", {
      calLink: "marqwon/discovery-call",
      config: { layout: "month_view" },
    });
  };

  // ✅ Show button only on specific routes
  if (!isVisible) return null;

  return (
    <button
      onClick={openCal}
      className="
        fixed bottom-6 right-6 z-50
        flex items-center gap-2
        bg-black text-white
        px-5 py-3 rounded-full
        shadow-lg hover:scale-105 transition cursor-pointer
      "
    >
      <Calendar className="w-5 h-5" />
      <span className="hidden md:inline">Book my Cal</span>
    </button>
  );
}
