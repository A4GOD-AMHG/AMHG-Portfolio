import LocaleSwitcher from "@/i18n/locale-switcher";
import ThemeToggle from "@/theme/toggle-theme";

export default function Option() {
    return (
        <div className="hidden md:flex items-center gap-6">
            <LocaleSwitcher />
            <ThemeToggle />
        </div>
    );
}