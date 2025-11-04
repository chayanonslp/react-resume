export default function About({ text, contact = {} }) {
  return (
    <section className="bg-white shadow-md rounded-xl p-6 mx-auto my-6">
      <h2 className="text-2xl font-bold mb-4 text-blue-700">เกี่ยวกับฉัน</h2>
      
      <p className="text-gray-700 mb-4">{text || "ไม่มีข้อมูลเกี่ยวกับฉัน"}</p>

      <div className="space-y-2">
        <p className="flex items-center text-gray-800">
          <span className="mr-2 text-blue-500">📧</span>
          <span>อีเมล: {contact.email || "ไม่ได้ระบุอีเมล"}</span>
        </p>
        <p className="flex items-center text-gray-800">
          <span className="mr-2 text-green-500">📞</span>
          <span>โทรศัพท์: {contact.phone || "ไม่ได้ระบุหมายเลขโทรศัพท์"}</span>
        </p>
      </div>
    </section>
  );
}
