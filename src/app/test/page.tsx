"use client"
import React, { useState } from 'react';
import { Calendar, Clock, User, MapPin, ArrowRight, Check, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';


const BookingPage: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [currentStep, setCurrentStep] = useState<number>(1);
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    notes: '',
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const serviceInfo = {
    providerName: 'د. سارة أحمد',
    serviceName: 'استشارة طبية عامة',
    duration: '30 دقيقة',
    price: '2000 دج',
    location: 'عيادة النور، وهران',
    description: 'استشارة طبية شاملة مع متابعة الحالة الصحية العامة',
  };

  const availableTimes = [
    '09:00',
    '09:30',
    '10:00',
    '11:30',
    '13:00',
    '14:00',
    '15:30',
    '16:00',
    '16:30',
    '17:00',
  ];

  const getDayStatus = (dayIndex: number): boolean => {
    return dayIndex !== 5 && dayIndex !== 6; // Available except Friday and Saturday
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.fullName) newErrors.fullName = 'يرجى إدخال الاسم الكامل';
    if (!formData.phoneNumber) newErrors.phoneNumber = 'يرجى إدخال رقم الهاتف';
    return newErrors;
  };

  const handleConfirmBooking = () => {
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }
    alert('تم تأكيد الحجز بنجاح');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-6" dir="rtl">
      <div className="max-w-5xl mx-auto">
        {/* Service Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">{serviceInfo.serviceName}</h1>
          <div className="flex items-center gap-4 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock size={16} />
              {serviceInfo.duration}
            </span>
            <span className="flex items-center gap-2">
              <MapPin size={16} />
              {serviceInfo.location}
            </span>
          </div>
        </div>

        {/* Booking Process */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            {/* Progress Steps */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex justify-between">
                {[1, 2, 3].map((step) => (
                  <div key={step} className="flex items-center">
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep >= step
                          ? 'bg-emerald-500 text-white'
                          : 'bg-gray-100 text-gray-400'
                      }`}
                    >
                      {currentStep > step ? <Check size={16} /> : step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`h-1 w-24 ${
                          currentStep > step ? 'bg-emerald-500' : 'bg-gray-100'
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Calendar Section */}
            <Card>
              <CardHeader>
                <CardTitle>اختر موعدك</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Calendar */}
                  <div className="bg-white rounded-lg p-4 border">
                    <div className="grid grid-cols-7 gap-1">
                      {['أحد', 'إثنين', 'ثلاثاء', 'أربعاء', 'خميس', 'جمعة', 'سبت'].map((day) => (
                        <div key={day} className="text-center text-sm font-medium text-gray-500 py-2">
                          {day}
                        </div>
                      ))}
                      {Array.from({ length: 30 }, (_, i) => (
                        <button
                          key={i}
                          className={`p-2 text-center rounded-lg hover:bg-emerald-50 ${
                            selectedDate === i
                              ? 'bg-emerald-500 text-white'
                              : 'text-gray-700 hover:bg-emerald-50'
                          }`}
                          onClick={() => setSelectedDate(i)}
                        >
                          {i + 1}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  <div className="space-y-4">
                    <h3 className="font-medium text-gray-900">الأوقات المتاحة</h3>
                    <div className="grid grid-cols-2 gap-2">
                      {availableTimes.map((time) => (
                        <button
                          key={time}
                          className={`p-3 rounded-lg border text-center transition-colors ${
                            selectedTime === time
                              ? 'bg-emerald-500 text-white'
                              : 'hover:bg-emerald-50 text-gray-700'
                          }`}
                          onClick={() => setSelectedTime(time)}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Form */}
            {selectedDate !== null && selectedTime && (
              <Card>
                <CardHeader>
                  <CardTitle>تأكيد الحجز</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          الاسم الكامل
                        </label>
                        <input
                          type="text"
                          value={formData.fullName}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, fullName: e.target.value }))
                          }
                          className={`w-full p-3 rounded-lg border ${
                            errors.fullName ? 'border-red-500' : 'focus:ring-2 focus:ring-emerald-500'
                          }`}
                          placeholder="أدخل اسمك الكامل"
                        />
                        {errors.fullName && <p className="text-red-500 text-sm">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          رقم الهاتف
                        </label>
                        <input
                          type="tel"
                          value={formData.phoneNumber}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))
                          }
                          className={`w-full p-3 rounded-lg border ${
                            errors.phoneNumber
                              ? 'border-red-500'
                              : 'focus:ring-2 focus:ring-emerald-500'
                          }`}
                          placeholder="0XX-XX-XX-XX"
                        />
                        {errors.phoneNumber && (
                          <p className="text-red-500 text-sm">{errors.phoneNumber}</p>
                        )}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        ملاحظات إضافية
                      </label>
                      <textarea
                        value={formData.notes}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...prev, notes: e.target.value }))
                        }
                        className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-emerald-500"
                        rows={3}
                        placeholder="أي معلومات إضافية تود مشاركتها..."
                      />
                    </div>
                  </div>
                  <button
                    onClick={handleConfirmBooking}
                    className="w-full bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors mt-4"
                  >
                    تأكيد الحجز
                  </button>
                </CardContent>
              </Card>
            )}
          </div>
            {/* Sidebar */}
            <div className="space-y-6">
            {/* Provider Info */}
            <Card>
              <CardHeader>
                <CardTitle>معلومات مقدم الخدمة</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src="/api/placeholder/64/64"
                    alt={serviceInfo.providerName}
                    className="w-16 h-16 rounded-full ring-2 ring-emerald-500"
                  />
                  <div>
                    <h3 className="font-medium text-gray-900">{serviceInfo.providerName}</h3>
                    <p className="text-sm text-gray-500">طبيبة عامة</p>
                  </div>
                </div>
                <p className="text-gray-600 text-sm">{serviceInfo.description}</p>
              </CardContent>
            </Card>

            {/* Booking Summary */}
            <Card>
              <CardHeader>
                <CardTitle>ملخص الحجز</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">الخدمة</span>
                    <span className="font-medium">{serviceInfo.serviceName}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">المدة</span>
                    <span className="font-medium">{serviceInfo.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">التكلفة</span>
                    <span className="font-medium">{serviceInfo.price}</span>
                  </div>
                  {selectedDate !== null && selectedTime && (
                    <div className="flex justify-between items-center">
                      <span className="text-gray-600">الموعد</span>
                      <span className="font-medium">
                        {`الأربعاء، ${selectedTime} - ${selectedDate + 1}`}
                      </span>
                    </div>
                  )}
                  <hr className="my-4" />
                  <button
                    onClick={handleConfirmBooking}
                    className={`w-full bg-emerald-500 text-white py-3 px-4 rounded-lg hover:bg-emerald-600 transition-colors ${
                      !selectedDate || !selectedTime
                        ? 'cursor-not-allowed opacity-50'
                        : ''
                    }`}
                    disabled={!selectedDate || !selectedTime}
                  >
                    تأكيد الحجز
                  </button>
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}

                يمكنك إلغاء موعدك قبل 24 ساعة من وقت الحجز

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingPage;