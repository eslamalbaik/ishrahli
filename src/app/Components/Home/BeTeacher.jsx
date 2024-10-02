import Image from 'next/image'
import Button from '../Button/Button';
const BeTeacher = () => {
  return (
    <div className="flex flex-col-reverse font-[family-name:var(--font-Cairo-Medium)] lg:flex-row justify-between items-center px-6 py-12 lg:px-24 lg:py-16 bg-gray-50">
  {/* Text Section */}
  <div className="lg:w-1/2 text-center lg:text-right space-y-8">
    <h3 className="text-3xl lg:text-4xl font-bold text-[--background]">
      كن مدرساً في منصة اشرحلي
    </h3>
    <p className="text-lg lg:text-xl text-gray-600 leading-relaxed">
      شارك بالتعليم من خلال منصة اشرحلي دوت نت مع نخبة كبيرة من معلمين
      المراحل الابتدائية والاعدادية والثانوية للمناهج العربي والانجليزي
      والفرنساوي والدولي
    </p>
    <Button nameLink="/TeacherRegister" ClassNameAdd="mt-4  bg-[--foreground] text-white px-6 py-3 rounded-lg " textinner="اشتراك المعلمين" />
  </div>

  {/* Image Section */}
  <div className="lg:w-1/2 mb-6 lg:mb-0">
    <Image
      src="/images/banner-image-group-teachers.png"
      alt="banner-image-group-teachers"
      width={450}
      height={450}
      className="mx-auto"
    />
  </div>
</div>

  );
};

export default BeTeacher;
