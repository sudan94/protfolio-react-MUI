// Soft colour palette for tech tags: [light-mode text, dark-mode text, base]
const palette = [
    ["#0f766e", "#5eead4", "20,184,166"],   // teal
    ["#4338ca", "#a5b4fc", "99,102,241"],   // indigo
    ["#b45309", "#fcd34d", "245,158,11"],   // amber
    ["#be123c", "#fda4af", "244,63,94"],    // rose
    ["#0369a1", "#7dd3fc", "14,165,233"],   // sky
    ["#7e22ce", "#d8b4fe", "168,85,247"],   // violet
    ["#047857", "#6ee7b7", "16,185,129"],   // emerald
    ["#c2410c", "#fdba74", "249,115,22"],   // orange
];

// Same tag name always gets the same colour across sections
const pick = (name) => {
    let hash = 0;
    for (const ch of name) hash = (hash * 31 + ch.charCodeAt(0)) >>> 0;
    return palette[hash % palette.length];
};

export const tagSx = (name) => (theme) => {
    const [light, dark, rgb] = pick(name);
    const isDark = theme.palette.mode === "dark";
    return {
        color: isDark ? dark : light,
        backgroundColor: `rgba(${rgb}, ${isDark ? 0.14 : 0.1})`,
        border: `1px solid rgba(${rgb}, ${isDark ? 0.35 : 0.3})`,
        fontWeight: 600,
    };
};
