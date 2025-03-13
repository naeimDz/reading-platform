'use client'
import { Switch } from '@/components/ui/switch';
import { useState } from 'react';




export default function NotificationSettings() {
    const [settings, setSettings] = useState({
        emailNotifications: true,
        pushNotifications: false,
        weeklyDigest: true,
    });

    const handleToggle = (key: keyof typeof settings) => {
        setSettings(prev => ({
            ...prev,
            [key]: !prev[key],
        }));
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">Notification Settings</h1>
            
            <div className="space-y-6">
                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-gray-500">Receive updates via email</p>
                    </div>
                    <Switch
                        checked={settings.emailNotifications}
                        onChange={() => handleToggle('emailNotifications')}
                        className={`${
                            settings.emailNotifications ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className={`${
                            settings.emailNotifications ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                    </Switch>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">Push Notifications</h3>
                        <p className="text-sm text-gray-500">Receive push notifications</p>
                    </div>
                    <Switch
                        checked={settings.pushNotifications}
                        onChange={() => handleToggle('pushNotifications')}
                        className={`${
                            settings.pushNotifications ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className={`${
                            settings.pushNotifications ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                    </Switch>
                </div>

                <div className="flex items-center justify-between">
                    <div>
                        <h3 className="font-medium">Weekly Digest</h3>
                        <p className="text-sm text-gray-500">Receive weekly summary</p>
                    </div>
                    <Switch
                        checked={settings.weeklyDigest}
                        onChange={() => handleToggle('weeklyDigest')}
                        className={`${
                            settings.weeklyDigest ? 'bg-blue-600' : 'bg-gray-200'
                        } relative inline-flex h-6 w-11 items-center rounded-full`}
                    >
                        <span className={`${
                            settings.weeklyDigest ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition`} />
                    </Switch>
                </div>
            </div>
        </div>
    );
}