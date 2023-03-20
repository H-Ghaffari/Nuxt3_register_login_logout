export default defineNuxtRouteMiddleware((to, from) => {
  const { authUser } = useAuth();

  if (authUser.value) {
    return navigateTo("/");
  }
});
