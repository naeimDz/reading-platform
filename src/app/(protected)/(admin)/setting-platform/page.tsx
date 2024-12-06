"use client"
import React, { useState } from 'react';
import {
  Settings,
  Bell,
  Globe,
  Lock,
  User,
  Shield,
  Database,
  Sliders,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';

// Types for settings state
interface SocialMediaIntegration {
  google: boolean;
  facebook: boolean;
  apple: boolean;
}

interface PlatformSettingsState {
  platformName: string;
  defaultLanguage: string;
  emailNotifications: boolean;
  pushNotifications: boolean;
  dailyDigest: boolean;
  twoFactorAuthentication: boolean;
  passwordComplexity: 'low' | 'medium' | 'high';
  allowRegistration: boolean;
  defaultUserRole: string;
  autoContentFilter: boolean;
  commentModeration: 'manual' | 'automated';
  socialMediaIntegration: SocialMediaIntegration;
}

// Types for field structure
type FieldType = 'text' | 'toggle' | 'select';

interface FieldOption {
  value: string;
  label: string;
}

interface Field {
  label: string;
  type: FieldType;
  value: any;
  key: keyof PlatformSettingsState | string; // Some fields might be nested
  options?: FieldOption[]; // For select fields
}

// Types for a settings section
interface SettingsSection {
  icon: JSX.Element;
  title: string;
  description: string;
  fields: Field[];
}

const PlatformSettings: React.FC = () => {
  // State with initial values
  const [settings, setSettings] = useState<PlatformSettingsState>({
    platformName: 'منصة القراءة الجزائرية',
    defaultLanguage: 'ar',
    emailNotifications: true,
    pushNotifications: false,
    dailyDigest: true,
    twoFactorAuthentication: false,
    passwordComplexity: 'medium',
    allowRegistration: true,
    defaultUserRole: 'reader',
    autoContentFilter: true,
    commentModeration: 'automated',
    socialMediaIntegration: {
      google: false,
      facebook: false,
      apple: false,
    },
  });

  // Array of settings sections
  const settingsSections: SettingsSection[] = [
    {
      icon: <Settings className="text-blue-600" />,
      title: 'الإعدادات العامة',
      description: 'تخصيص الإعدادات الأساسية للمنصة',
      fields: [
        {
          label: 'اسم المنصة',
          type: 'text',
          value: settings.platformName,
          key: 'platformName',
        },
        {
          label: 'اللغة الافتراضية',
          type: 'select',
          options: [
            { value: 'ar', label: 'العربية' },
            { value: 'en', label: 'English' },
            { value: 'fr', label: 'Français' },
          ],
          value: settings.defaultLanguage,
          key: 'defaultLanguage',
        },
      ],
    },
    {
      icon: <Bell className="text-orange-600" />,
      title: 'الإشعارات',
      description: 'إدارة تفضيلات الإشعارات',
      fields: [
        {
          label: 'إشعارات البريد الإلكتروني',
          type: 'toggle',
          value: settings.emailNotifications,
          key: 'emailNotifications',
        },
        {
          label: 'الإشعارات الفورية',
          type: 'toggle',
          value: settings.pushNotifications,
          key: 'pushNotifications',
        },
        {
          label: 'النشرة اليومية',
          type: 'toggle',
          value: settings.dailyDigest,
          key: 'dailyDigest',
        },
      ],
    },
    {
      icon: <Lock className="text-red-600" />,
      title: 'الأمان والخصوصية',
      description: 'تأمين حسابك وبياناتك',
      fields: [
        {
          label: 'المصادقة الثنائية',
          type: 'toggle',
          value: settings.twoFactorAuthentication,
          key: 'twoFactorAuthentication',
        },
        {
          label: 'مستوى تعقيد كلمة المرور',
          type: 'select',
          options: [
            { value: 'low', label: 'منخفض' },
            { value: 'medium', label: 'متوسط' },
            { value: 'high', label: 'عالي' },
          ],
          value: settings.passwordComplexity,
          key: 'passwordComplexity',
        },
      ],
    },
  ];

  // Render individual settings section
  const renderSettingsSection = (section: SettingsSection) => (
    <div key={section.title} className="bg-white shadow-md rounded-2xl p-6 mb-6">
      <div className="flex items-center mb-4">
        {section.icon}
        <div className="mr-4">
          <h3 className="text-xl font-bold text-gray-800">{section.title}</h3>
          <p className="text-gray-500 text-sm">{section.description}</p>
        </div>
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {section.fields.map((field) => (
          <div key={field.key} className="flex justify-between items-center">
            <label className="text-gray-700">{field.label}</label>
            {field.type === 'toggle' && (
              <label className="flex items-center cursor-pointer">
                <div className="relative">
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={field.value}
                    onChange={() =>
                      setSettings((prev) => ({
                        ...prev,
                        [field.key]: !field.value,
                      }))
                    }
                  />
                  <div
                    className={`w-10 h-4 ${
                      field.value ? 'bg-blue-600' : 'bg-gray-300'
                    } rounded-full shadow-inner transition`}
                  ></div>
                  <div
                    className={`dot absolute -left-1 -top-1 bg-white w-6 h-6 rounded-full shadow transition transform ${
                      field.value ? 'translate-x-full' : ''
                    }`}
                  ></div>
                </div>
              </label>
            )}
            {field.type === 'text' && (
              <input
                type="text"
                value={field.value}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="border rounded-lg px-3 py-2 w-64"
              />
            )}
            {field.type === 'select' && (
              <select
                value={field.value}
                onChange={(e) =>
                  setSettings((prev) => ({
                    ...prev,
                    [field.key]: e.target.value,
                  }))
                }
                className="border rounded-lg px-3 py-2 w-64"
              >
                {field.options?.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="bg-gray-50 min-h-screen p-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center space-x-4">
            <Sliders className="text-blue-600" size={36} />
            <h1 className="text-3xl font-bold text-gray-800">إعدادات المنصة</h1>
          </div>
          <button
            className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-600 transition"
          >
            <CheckCircle className="mr-2" /> حفظ التغييرات
          </button>
        </div>
        {settingsSections.map(renderSettingsSection)}
      </div>
    </div>
  );
};

export default PlatformSettings;
