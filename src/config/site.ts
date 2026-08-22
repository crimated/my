export const site = {
  brandAr: "ذوق منيو",
  brandEn: "Zoq Menu",
  tagline: "منيو مطعمك… بطابع يليق بذوقك.",
  whatsappNumber: "9647730122166",
  whatsappDisplay: "07730122166",
  instagramUrl: "https://instagram.com/zoqmenu",
  instagramHandle: "@zoqmenu",
  ctaPrimary: "اطلب المنيو",
  copyright: "© 2026 ذوق منيو — جميع الحقوق محفوظة",
} as const;

export const navLinks = [
  { label: "الرئيسية", href: "#home" },
  { label: "المميزات", href: "#features" },
  { label: "كيف نعمل؟", href: "#how-it-works" },
  { label: "الباقات", href: "#pricing" },
  { label: "الأسئلة الشائعة", href: "#faq" },
] as const;

export const trustItems = [
  "تصميم احترافي",
  "رابط خاص",
  "QR Code",
  "متوافق مع الهاتف",
] as const;

export const features = [
  {
    title: "تصميم احترافي",
    description: "منيو مصمم بطريقة تناسب هوية مطعمك وتظهر أصنافك بشكل أنيق.",
  },
  {
    title: "يعمل على جميع الأجهزة",
    description: "تجربة ممتازة على الهاتف والتابلت والكمبيوتر.",
  },
  {
    title: "رابط خاص",
    description: "رابط خاص لمنيو مطعمك سهل المشاركة.",
  },
  {
    title: "QR Code",
    description: "QR Code خاص بالمنيو للطباعة ووضعه على الطاولات.",
  },
  {
    title: "تحديثات",
    description: "إمكانية تحديث الأسعار والأصناف حسب الباقة والخدمة المتفق عليها.",
  },
  {
    title: "سرعة عالية",
    description: "منيو سريع وخفيف حتى يصل الزبون إلى الأصناف بسرعة.",
  },
] as const;

export const steps = [
  {
    number: "01",
    title: "اطلب",
    description: "اختر الباقة المناسبة وأرسل طلبك عبر واتساب.",
  },
  {
    number: "02",
    title: "نجهز",
    description:
      "ترسل لنا معلومات مطعمك وصور الأصناف والأسعار، ونحن نجهز المنيو.",
  },
  {
    number: "03",
    title: "استلم",
    description: "تحصل على رابط المنيو وQR Code الخاص بمطعمك.",
  },
] as const;

export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  featured: boolean;
  badge?: string;
  features: string[];
  cta: string;
};

export const plans: Plan[] = [
  {
    id: "basic",
    name: "البداية",
    price: "100,000 د.ع",
    period: "سنوياً",
    featured: false,
    features: [
      "منيو إلكتروني متجاوب",
      "إضافة الأقسام والأصناف",
      "إضافة الأسعار والوصف",
      "إضافة صور الأصناف",
      "رابط خاص للمنيو",
      "QR Code",
      "تصميم مرتب وجاهز",
    ],
    cta: "اطلب هذه الباقة",
  },
  {
    id: "pro",
    name: "الاحتراف",
    price: "150,000 د.ع",
    period: "سنوياً",
    featured: true,
    badge: "الأكثر طلباً ⭐",
    features: [
      "كل مميزات باقة البداية",
      "تصميم مخصص للمطعم",
      "شعار وألوان المطعم",
      "زر واتساب للطلبات",
      "معلومات المطعم وموقعه",
      "أوقات الدوام",
      "حالة متوفر / غير متوفر للأصناف",
      "تعديلات على المنيو",
    ],
    cta: "اطلب هذه الباقة",
  },
  {
    id: "premium",
    name: "المميزة",
    price: "200,000 د.ع",
    period: "سنوياً",
    featured: false,
    features: [
      "كل مميزات باقة الاحتراف",
      "تصميم مخصص بالكامل",
      "خيارات وإضافات للأصناف",
      "عروض وخصومات",
      "دعم أكثر من فرع",
      "أولوية بالتعديلات والدعم",
      "تجربة أكثر احترافية للمطعم",
    ],
    cta: "اطلب هذه الباقة",
  },
];

export const faqs = [
  {
    question: "كم يستغرق تجهيز المنيو؟",
    answer: "يتم تحديد المدة حسب حجم المنيو والباقة المطلوبة.",
  },
  {
    question: "هل أحتاج إلى شراء دومين؟",
    answer: "لا، يتم توفير رابط للمنيو حسب الخدمة المتفق عليها.",
  },
  {
    question: "هل يمكن تعديل الأسعار والأصناف؟",
    answer: "نعم، حسب الباقة والخدمة المتفق عليها.",
  },
  {
    question: "هل يعمل المنيو على الهاتف؟",
    answer: "نعم، المنيو مصمم ليعمل بشكل ممتاز على الهواتف وجميع الشاشات.",
  },
  {
    question: "هل يوجد QR Code؟",
    answer: "نعم، يتم توفير QR Code للمنيو.",
  },
] as const;
