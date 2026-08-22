import { site, type Plan } from "@/config/site";

const GENERAL_MESSAGE = `السلام عليكم، أريد طلب منيو إلكتروني من ${site.brandAr}.

اسم المطعم:
نوع النشاط:
الباقة المطلوبة:
عدد الفروع:
ملاحظات:`;

export function whatsappUrl(message: string = GENERAL_MESSAGE) {
  return `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function planWhatsappUrl(plan: Plan) {
  const message = `السلام عليكم، أريد طلب منيو إلكتروني من ${site.brandAr}.

الباقة المطلوبة: ${plan.name}
السعر: ${plan.price} ${plan.period}

اسم المطعم:
نوع النشاط:
عدد الفروع:
ملاحظات:`;
  return whatsappUrl(message);
}
