import { useRef, useState } from "react";
import { message, Upload } from "antd";
import { TiUpload } from "react-icons/ti";
const { Dragger } = Upload;

export default function BoxImg() {
  const [imagePreview, setImagePreview] = useState(null);

  // bu base64ga o'tkazadi
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  // file ko'rinishida base64 farmatiga o'tkazib statega joylab imgda ishlatamiz
  const handleUpload = async (info) => {
    const { file } = info;

    // Fayl hajmini tekshirish bu sayt tezligi uchun ishlaydi
    if (file.size > 4 * 1024 * 1024) {
      message.error("Rasm hajmi 4MB dan kichik bo'lishi kerak!");
      return;
    }
    try {
      const base64Image = await convertToBase64(file);

      setImagePreview(base64Image);

      message.success("Rasm muvaffaqiyatli yuklandi");
    } catch (error) {
      console.error("Rasmni o'qishda xatolik:", error);
      message.error("Rasmni yuklashda xatolik yuz berdi");
    }
  };

  return (
    <div>
      <div className="flex w-full h-full justify-center items-center z-[99999] py-4">
        {imagePreview ? (
          <div className="h-[200px]">
            <img
              src={imagePreview}
              alt="imgBox"
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div>
            <Dragger
              name="photo"
              multiple={false}
              showUploadList={false}
              beforeUpload={() => false} // Avtomatik yuklashni o'chirish
              onChange={handleUpload}
              accept="image/jpeg,image/png,image/webp"
            >
              <p className="p-0 flex justify-center text-[20px]">
                <TiUpload />
              </p>
              <p className="ant-upload-text">
                Rasmni shu yerga tashlang yoki tanlang
              </p>
              <p className="ant-upload-hint">
                JPG, PNG yoki WebP formatida, maksimum 5MB
              </p>
            </Dragger>
          </div>
        )}
      </div>
    </div>
  );
}
