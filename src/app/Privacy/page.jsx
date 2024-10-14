"use client"
import Link from "next/link";
import dynamic from "next/dynamic";
const Breadcrumbs = dynamic(() => import("../Components/Breadcrumbs"));
const linksPrivcay = [
  { href: "/", label: "الصفحة الرئيسية" },
  { href: "/Privacy", label: "الشروط والأحكام" },
];
const page = () => {
  return (
      <section className="py-16 px-4 md:px-10 lg:px-24 font-[family-name:var(--font-Cairo-Medium)] bg-[#f3f3f3ec]">
        <Breadcrumbs links={linksPrivcay} />
        <div className="flex flex-col items-center py-10">
          <h1 className="text-center p-6 text-3xl md:text-4xl font-bold text-[--background] font-[family-name:var(--font-Cairo-Bold)]">
            الشروط والأحكام
          </h1>
          <div className="px-6 py-6 bg-white shadow-md rounded-md sm:rounded-lg w-full">
            <div className="py-8 md:py-12 px-4 sm:px-6 lg:px-12 font-[family-name:var(--font-Cairo-Medium)]">
              <h2 className="text-2xl md:text-3xl font-bold text-[#333] mb-6">
                من نـحـن
              </h2>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                نحن منصة تعليمية عربية يقدم شرحاَ مُلَماً لكافة المواد التعليمية
                في المنهج الدراسي لدولة الكويت من خلال مقاطع فيديو مسجلة ومذكرات
                ورقية مطبوعة، ونحن في منصة اشرحلي نسعى لبناء جيل متعلم واعٍ
                وايصال المعلومة والمعرفة بأبسط طريقة ممكنة.
              </p>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                نقدم لك كورسات الكترونية في المجالات التعلمية للمراحل التعلمية
                الثلاثة الابتدائية والمتوسطة والثانوية، وتهدف المنصة لتبسيط
                عملية التعليم عن طريق توفير الدورات التعليمية بأساليب سهلة
                وبتكاليف معقولة ومناسبة، إضافة إلى ذلك نقدم لك عزيزي الطالب
                مذكرة شاملة للمنهج، ونماذج اختبارات أون لاين، وتواصل مع المعلم
                من خلال الدردشة.
              </p>
              <p className="mb-6 text-base md:text-lg text-[#555] leading-relaxed">
                الدورات المسجلة على منصة اشرحلي يقدمها معلمين متخصصين في المواد
                التعليمية التي يقدمونها.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                الشروط والأحكام:
              </h2>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                نقدم هذه الشروط والأحكام على منصة اشرحلي، لذا يتوجب على الطالب
                أو المستخدم معرفتها حتى يستطيع استخدام المنصة، فعند التسجيل في
                الموقع يقر المستخدم والطالب بأنه أطلع على جميع البنود ووافق
                عليها.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                المستخدمين المحظورين
              </h2>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                منصة اشرحلي غير متاحة لكل مما يلي:
              </p>
              <ul className="list-disc list-inside mb-6 text-base md:text-lg text-[#555] leading-relaxed">
                <li>
                  لا يقبل تسجيل أي طالب محظور بسبب سلوك سيئ بدر منه من خلال
                  الرسائل أو التعليقات.
                </li>
                <li>لمن تم إزالته من المنصة وغلق حسابة.</li>
                <li>لمن يشارك حسابه مع الآخرين.</li>
                <li>لمن تم تعليق حسابه في وقت سابق.</li>
                <li>
                  غير متاح لأي مستخدم تحت سن 14 عام، والذي لم يتم التأكيد
                  والموافقة عليه من قبل الوصي أو ولي الأمر.
                </li>
              </ul>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                المستخدمين الأطفال
              </h2>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                في حال كان عمرك أقل من 15 عام فأنت تعتبر مستخدم طفل، ربما لا
                تستطيع تسجيل حساب للخدمات أو حتى إنشائه بدون موافقة الوصي عليك
                أو ولي أمرك.
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                المستخدمين البالغين
              </h2>
              <p className="mb-6 text-base md:text-lg text-[#555] leading-relaxed">
                يعتبر كل مستخدم فوق 18 عام هو بالغ ومدرك لشروط استخدام المنصة
                والخصوصية.
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                سياسة الخصوصية
              </h2>
              <p className="mb-6 text-base md:text-lg text-[#555] leading-relaxed">
                التسجيل في الكورس ودورات شرح المنهج على منصة اشرحلي يتم بسلاسة
                وأمان، حيث إن كافة المعلومات والبيانات التي يقدمها المستخدم
                الخاصة بالدفع يتم تشفيرها تماماً من قبل بوابة الدفع بعيداً عن
                المنصة، ولا يستطيع أحد معرفتها، كما أننا لا نحتفظ بها في
                انظمتنا، وكذلك لا يمكن استرجاع تلك البيانات مرة أخرى.
              </p>
              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                أسعارنا
              </h2>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                أسعارنا معروضة في المنصة سارية فقط في فترة الطلب من إضافة الدورة
                للسلة الى الدفع وإتمام عملية الدفع، ويمكن للمنصة تعديل الأسعار
                في أي وقت، كما يحق للمنصة عمل عروض على أسعار الكورسات في أي وقت.
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                وسائل الدفع
              </h2>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                الدفع متاح باستخدام K.net
              </p>

              <h2 className="text-2xl md:text-3xl font-semibold text-[#444] mt-10 mb-4">
                سياسة إلغاء الاشتراك
              </h2>
              <ul className="list-disc list-inside mb-6 text-base md:text-lg text-[#555] leading-relaxed">
                <li>
                  بعد إنهاء التسجيل ودفع رسوم الكورس المراد أو الباقة يمكن
                  للطالب أن يطلب إلغاء الاشتراك لأي سبب كان، لكن تعود اجراءات
                  قبول الإلغاء لكمية المحتوى المشاهد من الدورة وعامل الوقت.
                </li>
                <li>
                  يستطيع الطالب تقديم طلب استرجاع القيمة المالية الدورة لحسابه
                  في حال لم يشاهد أكثر من خمسة بالمئة (5%) من محتوى الدورة.
                </li>
                <li>
                  لا يمكن إلغاء الاشتراك في العروض المقدمة على الكورسات والدروات
                  وكذلك الباقات حيث يتوفر دروس مجانية في كل كورس للدراسة
                  المجانية قبل الاشتراك
                </li>
              </ul>
              <p className="mb-4 text-base md:text-lg text-[#555] leading-relaxed">
                إذا كان لديك أي أسئلة أو استفسارات حول سياسة الخصوصية، يمكنك
                التواصل معنا عبر البريد الإلكتروني:
                <Link
                  href="mailto:info.ishrahli@gmail.com"
                  className="text-blue-500 underline"
                >
                  info.ishrahli@gmail.com
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
  );
};

export default page;
