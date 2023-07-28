import { Provider } from "react-redux";
import Router from "./router/Router";
import { store } from "./Redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
      {/* <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          // Define default options
          className: "",
          duration: 5000,
          style: {
            background: "#363636",
            color: "#fff",
          },

          // Default options for specific types
          success: {
            duration: 3000,
            theme: {
              primary: "green",
              secondary: "black",
            },
          },
        }}
      /> */}
    </>
  );
}

export default App;
