/**
 * Configurações de Tema e Estilo
 * @description Paleta de cores, tipografia e espaçamentos para modo claro/escuro
 * @includes cores, fontes, espaçamentos, bordas e transições
 */
export const themeConfig = {
    // Cores principais - refinadas para melhor contraste e harmonia
    light: {
        primaryColor: "#2563eb", // Azul moderno (Royal Blue)
        secondaryColor: "#ef4444", // Vermelho vibrante
        accentColor: "#0ea5e9", // Azul céu (Sky Blue)
        backgroundColor: "#ffffff", // Branco puro para visual clean
        paperColor: "#f8fafc", // Slate 50 para contraste sutil
        alternateBackground: "#f1f5f9", // Slate 100
        textPrimary: "#1e293b", // Slate 800 para excelente legibilidade
        textSecondary: "#64748b", // Slate 500
        dividerColor: "#e2e8f0", // Slate 200
        shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.1)", // Sombra suave e moderna
        hoverShadow: "0 20px 40px -12px rgba(37, 99, 235, 0.2)" // Sombra colorida no hover
    },
    dark: {
        primaryColor: "#3b82f6", // Electric Blue vibrante
        secondaryColor: "#f43f5e", // Rose vibrante
        accentColor: "#06b6d4", // Cyan neon
        backgroundColor: "#020617", // Slate 950 (Midnight)
        paperColor: "#0f172a", // Slate 900
        alternateBackground: "#1e293b", // Slate 800
        textPrimary: "#f8fafc", // Slate 50
        textSecondary: "#94a3b8", // Slate 400
        dividerColor: "#1e293b", // Slate 800
        shadow: "0 10px 30px -10px rgba(0, 0, 0, 0.5)", // Sombra profunda
        hoverShadow: "0 20px 40px -12px rgba(59, 130, 246, 0.3)" // Glow azul no hover
    },

    // Tipografia aprimorada com Google Fonts
    fontFamily: "'Inter', 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif",
    fontSize: {
        xs: "0.75rem",
        small: "0.875rem",
        medium: "1rem",
        large: "1.25rem",
        xlarge: "2rem",
        xxlarge: "3rem",
        xxxlarge: "3.75rem"
    },
    fontWeight: {
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700
    },

    // Espaçamentos seguindo o padrão 8px
    spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        xxl: "48px",
        xxxl: "64px"
    },

    // Border radius padronizado
    borderRadius: {
        small: "6px",
        medium: "12px",
        large: "16px",
        xl: "24px",
        round: "50%"
    },

    // Animações e transições
    transitions: {
        fast: "0.15s ease-out",
        normal: "0.3s ease-in-out",
        slow: "0.5s ease-in-out"
    }
};
