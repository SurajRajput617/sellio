import { recentOrders } from "@/lib/data";

const statusStyles: Record<string, string> = {
  Fulfilled: "bg-good/10 text-good",
  Processing: "bg-navy/10 text-navy",
  Refunded: "bg-bad/10 text-bad",
};

export default function RecentOrders() {
  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[560px] text-left text-sm">
        <thead>
          <tr className="text-xs font-semibold uppercase tracking-wide text-navy-mute">
            <th className="pb-3 pr-4 font-semibold">Order</th>
            <th className="pb-3 pr-4 font-semibold">Customer</th>
            <th className="pb-3 pr-4 font-semibold">Product</th>
            <th className="pb-3 pr-4 font-semibold">Total</th>
            <th className="pb-3 font-semibold">Status</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {recentOrders.map((order) => (
            <tr key={order.id}>
              <td className="py-3 pr-4 font-medium text-navy">{order.id}</td>
              <td className="py-3 pr-4 text-navy-mute">{order.customer}</td>
              <td className="py-3 pr-4 text-navy-mute">{order.product}</td>
              <td className="py-3 pr-4 font-medium text-navy">{order.total}</td>
              <td className="py-3">
                <span
                  className={`inline-flex rounded-full px-2.5 py-1 text-xs font-semibold ${statusStyles[order.status]}`}
                >
                  {order.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
