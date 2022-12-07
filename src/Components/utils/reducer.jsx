export const reducerTheme = (state, action) => {
    switch (action.type){
        case "THEME_LIGHT":
            return {
                theme:(state.theme = ""),
            };
        case "THEME_DARK":
            return {
                theme:(state.theme = "dark"),
            };
            default:
                throw new Error();
    }
};