# The Wild Oasis Hotel

a Hotel internal system

- one authenticated user (email ==> abdullah@email.com), (password ==> 123456789)
- [live demo](https://the-wild-oasis-hotell-app.netlify.app/login)

## About the app

- only the hotel's employees can use the application.
- we can only sign up a new email inside the application.
- the guests already booked online and the app gets the booking, guests and cabins data from an api.
- the app allow the employee to chechin unconfirmed booking when the guest arrives at the hotel.
- the app allow the employee to chechout cheched-in booking when the guest leaves the hotel.
- the employee can update his app profile data (user nam, password and avatar).
- the employee can update, delete any cabin data, or add a new cabin.

### technologies used

- styled-components library for styling.
- supabase to build a back-end.
- React Query to manage remote global state.
- Context Api to manage local global state.
- React hook form to handle form submitting and form errors.
- react-hot-toast library to display notification.
- Advanced React Patterns (render props pattern and compound component pattern).
- recharts library to display charts
