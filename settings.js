import { i18n } from "./monks-pf2e-encounter-aftermath.js";

export const registerSettings = function () {
    // Register any custom module settings here
    let modulename = "monks-pf2e-encounter-aftermath";

    game.settings.register(modulename, "show-after-combat", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.show-after-combat.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.show-after-combat.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(modulename, "clear-after-combat", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.clear-after-combat.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.clear-after-combat.hint"),
        scope: "world",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(modulename, "open-after-combat", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.open-after-combat.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.open-after-combat.hint"),
        scope: "client",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(modulename, "notification-on-advance", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.notification-on-advance.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.notification-on-advance.hint"),
        scope: "client",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(modulename, "track-previous", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.track-previous.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.track-previous.hint"),
        scope: "client",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(modulename, "auto-increase-interval", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.auto-increase-interval.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.auto-increase-interval.hint"),
        scope: "client",
        config: true,
        default: true,
        type: Boolean,
    });

    game.settings.register(modulename, "chat-summary", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.chat-summary.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.chat-summary.hint"),
        scope: "world",
        config: true,
        default: false,
        type: Boolean,
    });

    game.settings.register(modulename, "resolve-whisper", {
        name: i18n("monks-pf2e-encounter-aftermath.settings.resolve-whisper.name"),
        hint: i18n("monks-pf2e-encounter-aftermath.settings.resolve-whisper.hint"),
        scope: "client",
        config: true,
        default: false,
        type: Boolean,
    });
}