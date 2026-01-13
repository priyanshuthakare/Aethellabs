import React from "react";
import {
    FileCheck,
    Users2,
    Receipt,
    CreditCard,
    BarChart3,
    ClipboardList,
    Package,
    Scale,
    FileText,
    TrendingUp,
    UserPlus,
    Boxes,
    Clock,
    HeadphonesIcon,
    Activity,
    Bell,
    Factory,
    Calendar,
    MessageSquare,
    Timer,
    BellRing,
    CalendarCheck,
    MessageCircle,
    MoreHorizontal
} from "lucide-react";

const useCases = [
    { icon: Calendar, title: "Field Service Scheduling", featured: true },
    { icon: FileCheck, title: "Document Data Extraction", featured: true },
    { icon: Receipt, title: "Invoice Generation", featured: true },
    { icon: CreditCard, title: "Accounts Payable", featured: true },
    { icon: BarChart3, title: "Executive Reporting" },
    { icon: ClipboardList, title: "Job Sheet Management" },
    { icon: Package, title: "Order Processing" },
    { icon: Scale, title: "Payment Reconciliation", featured: true },
    { icon: FileText, title: "Contract Management" },
    { icon: TrendingUp, title: "Lead Allocation" },
    { icon: UserPlus, title: "Employee Onboarding" },
    { icon: Boxes, title: "Inventory Sync" },
    { icon: Clock, title: "Time Tracking" },
    { icon: HeadphonesIcon, title: "Customer Support" },
    { icon: Activity, title: "Team Performance Tracking" },
    { icon: Bell, title: "Stock Alerts" },
    { icon: Factory, title: "Manufacturing Monitoring" },
    { icon: Calendar, title: "Calendar Event Sync" },
    { icon: MessageSquare, title: "Enquiry Management" },
    { icon: Timer, title: "Meeting Scheduling" },
    { icon: BellRing, title: "Incident Alerting" },
    { icon: CalendarCheck, title: "Task Reminders" },
    { icon: MessageCircle, title: "Team Notification" },
    { icon: CalendarCheck, title: "Appointment Reminders" },
    { icon: MessageCircle, title: "SMS Notification" },
];

export const UseCasesSection = () => {
    return (
        <section id="use-cases" className="py-20 px-4 bg-white">
            <div className="w-full max-w-[1200px] mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                        We've built thousands of AI automation solutions{" "}
                        <span className="text-aethel-500">for service businesses like yours</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Here are just a few examples of AI automation use cases you might need help with too.
                    </p>
                </div>

                {/* Use Case Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                    {useCases.map((useCase, index) => {
                        const IconComponent = useCase.icon;
                        return (
                            <button
                                key={index}
                                className="group flex items-center gap-3 p-4 rounded-xl bg-gray-50 hover:bg-aethel-50 border border-gray-100 hover:border-aethel-200 transition-all duration-300"
                            >
                                <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${useCase.featured
                                        ? 'bg-aethel-500 text-white'
                                        : 'bg-gray-200 text-gray-600 group-hover:bg-aethel-500 group-hover:text-white'
                                    } transition-colors duration-300`}>
                                    <IconComponent className="w-4 h-4" />
                                </div>
                                <span className="text-sm font-medium text-gray-700 group-hover:text-aethel-700 text-left leading-tight transition-colors">
                                    {useCase.title}
                                </span>
                            </button>
                        );
                    })}

                    {/* Plus More */}
                    <button className="group flex items-center gap-3 p-4 rounded-xl bg-aethel-500 hover:bg-aethel-600 transition-colors">
                        <div className="w-9 h-9 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                            <MoreHorizontal className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-white text-left leading-tight">
                            Plus so much more
                        </span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default UseCasesSection;
