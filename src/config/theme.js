/**
 * Configurações de Tema e Estilo
 * @description Paleta de cores, tipografia e espaçamentos para modo claro/escuro
 * @includes cores, fontes, espaçamentos, bordas e transições
 */
export const themeConfig = {
    // Cores principais - refinadas para melhor contraste e harmonia
    light: {
        primaryColor: "#1565c0", // Azul mais vibrante e profissional
        secondaryColor: "#d32f2f", // Vermelho mais equilibrado
        accentColor: "#00897b", // Verde-azulado sofisticado
        backgroundColor: "#fafafa",
        paperColor: "#ffffff",
        alternateBackground: "#f5f7fa", // Off-white para seções alternadas
        textPrimary: "#2c3e50", // Texto mais escuro para melhor contraste
        textSecondary: "#64748b", // Cinza moderno
        dividerColor: "#e2e8f0",
        shadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
        hoverShadow: "0 12px 40px rgba(0, 0, 0, 0.15)"
    },
    dark: {
        primaryColor: "#64b5f6", // Azul suave para fundo escuro
        secondaryColor: "#ef5350", // Vermelho suave
        accentColor: "#4db6ac", // Verde-azulado suave
        backgroundColor: "#0f172a", // Azul muito escuro
        paperColor: "#1e293b", // Cinza-azul escuro para cards
        alternateBackground: "#1a202c", // Cinza escuro para seções alternadas
        textPrimary: "#f1f5f9", // Branco quase puro
        textSecondary: "#94a3b8", // Cinza claro
        dividerColor: "#334155",
        shadow: "0 4px 20px rgba(0, 0, 0, 0.3)",
        hoverShadow: "0 12px 40px rgba(0, 0, 0, 0.5)"
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
