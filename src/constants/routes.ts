enum MAIN_FLOW {
  TASKS = 'My Task',
  MENU = 'Menu',
  QUICK = 'Quick',
  PROFILE = 'Profile',
}

enum AUTH_FLOW {
  SIGN_IN = 'Sign In',
  SIGN_UP = 'Sign Up',
  ONBOARDING = 'Onboard',
  FORGOT_PASS = 'Forgot',
  RESET_PASS = 'Reset',
  AUTH_SCREEN = 'AUTH',
  INITIAL_SCREEN = 'AUTH_INITIAL_SCREEN',
}

export const ROUTES = {
  MAIN_FLOW: MAIN_FLOW,
  AUTH_FLOW: AUTH_FLOW,
};
