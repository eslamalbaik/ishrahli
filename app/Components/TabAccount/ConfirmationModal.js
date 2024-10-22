// components/ConfirmationModal.js
import Link from "next/link";
import React from "react";

const ConfirmationModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white rounded-lg shadow-lg p-6 z-10">
        <h2 className="text-xl font-bold mb-4">هل أنت متأكد من حذف الحساب؟</h2>
        <div className="flex justify-center gap-8 ">
          <button
            onClick={onConfirm}
            className="bg-red-600 text-white px-4 py-2 rounded"
          >
            نعم
          </button>
          <button
            onClick={onClose}
            className="bg-gray-300 text-black  mr-4 px-4 py-2 rounded"
          >
            لا
          </button>
        </div>
      </div>
    </div>
  );
};
const SuccessPopup = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="fixed inset-0 bg-black opacity-50" onClick={onClose} />
      <div className="bg-white rounded-lg shadow-lg p-6 z-10">
        <h2 className="text-xl font-bold mb-4">تم حذف الحساب!</h2>
        <div className="flex justify-center">
        <Link href='/'>
        <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            موافق
          </button>
        </Link>

        </div>
      </div>
    </div>
  );
};
export { ConfirmationModal, SuccessPopup };
