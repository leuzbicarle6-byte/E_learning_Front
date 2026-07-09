import React, { useState } from "react";
import {
  useGetNotificationsQuery,
  useMarkAsReadMutation,
} from "../../backend/features/notifications/notifications";
import { Bell, Check, Trash2 } from "lucide-react";

export default function NotificationBell() {
  const { data: notifications = [], refetch } = useGetNotificationsQuery();

  const notif = notifications?.results ?? [];
  const [markAsRead] = useMarkAsReadMutation();
  const [isOpen, setIsOpen] = useState(false);

  // Compter les notifications non lues
  const unreadCount = notif.filter((n) => !n.is_read).length;

  return (
    <div className="relative font-sans">
      {/* Icône de la Cloche */}
      <button
        onClick={() => setIsOpen(!isOpen, refetch(  ))}
        className="relative p-2 text-slate-400 hover:text-white rounded-xl bg-[#112240] border border-slate-700 transition-all"
      >
        <Bell className="w-5 h-5" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Menu Déroulant des Notifications */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-[#112240] border border-slate-700 rounded-2xl shadow-2xl z-50 p-4 text-white animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
            <h4 className="text-sm font-bold">Notifications</h4>
            {unreadCount > 0 && (
              <span className="text-xs text-purple-400">
                {unreadCount} nouvelle(s)
              </span>
            )}
          </div>

          <div className="space-y-2 max-h-64 overflow-y-auto pr-1">
            {notifications.length === 0 ? (
              <p className="text-xs text-slate-400 text-center py-4">
                Aucune notification pour le moment.
              </p>
            ) : (
              notif.map((notif) => (
                <div
                  key={notif.id}
                  className={`p-3 rounded-xl border transition-all ${
                    notif.is_read
                      ? "bg-[#0a192f]/40 border-slate-800/60 opacity-60"
                      : "bg-[#0a192f] border-purple-500/30 shadow-md shadow-purple-500/5"
                  }`}
                >
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <h5 className="text-xs font-bold text-white">
                        {notif.title}
                      </h5>
                      <p className="text-[11px] text-slate-300 mt-0.5 leading-relaxed">
                        {notif.message}
                      </p>
                    </div>
                    {!notif.is_read && (
                      <button
                        onClick={() => markAsRead(notif.id)}
                        className="p-1 bg-purple-600/20 text-purple-400 hover:bg-purple-600 hover:text-white rounded-md transition-all shrink-0"
                        title="Marquer comme lu"
                      >
                        <Check className="w-3 h-3" />
                      </button>
                    )}
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
