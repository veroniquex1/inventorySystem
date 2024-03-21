import {
  createStore
} from 'vuex'
import axios from "axios";
import sweet from "sweetalert";
import {
  useCookies
} from "vue3-cookies";
const {
  cookies
} = useCookies();
import router from "../router";
import AuthenticateUser from "../service/AuthenticateUser";
const invURL = "https://inventorysystem-djiy.onrender.com";

export default createStore({
  state: {
    users: null,
    user: null,
    products: null,
    product: null,
    suppliers: null,
    supplier: null
  },
  getters: {},
  mutations: {
    setUsers(state, value) {
      state.users = value;
    },
    setUser(state, value) {
      state.user = value;
    },
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    },
    setSuppliers(state, value) {
      state.suppliers = value;
    },
    setSupplier(state, value) {
      state.supplier = value;
    },
  },

  // registration
  actions: {
    async register(context, packet) {
      try {
        let {
          message
        } = await (
          await axios.post(`${invURL}users/register`, packet))
        .data;
        console.log(message);
        context.dispatch("fetchUsers");
        sweet({
          title: "Registration",
          text: message,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        })
      }
    },
    
    // fetching users
    async fetchUsers(context) {
      try {
        let {
          results
        } = (await axios.get(`${invURL}users`)).data;
        if (results) {
          context.commit("setUsers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving users.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // fetch single user
    async fetchUser(context, packet) {
      try {
        let {
          result
        } = (await axios.get(`${invURL}users/${packet.id}`)).data;
        if (result) {
          context.commit("setUser", result);
        } else {
          sweet({
            title: "Retrieving a single user",
            text: "User was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A user was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // update user
    async updateUser(context, packet) {
      try {
        let {
          msg
        } = await axios.patch(`${invURL}users/update/${packet.id}`);
        if (msg) {
          context.dispatch("fetchUsers");
          sweet({
            title: "Update user",
            text: msg,
            icon: "success",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when updating a user.",
          icon: "success",
          timer: 2000,
        });
      }
    },

    // delete user
    async deleteUser({
      commit,
      dispatch
    }, packet) {
      try {
        await axios.delete(`${invURL}users/delete/${packet.id}`);
        commit("setUsers");
        dispatch("fetchUsers");
        sweet({
          title: "Delete user",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a user.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // login
    async login(context, packet) {
      try {
        const {
          msg,
          token,
          result
        } = (
          await axios.post(`${invURL}users/login`, packet)
        ).data;
        if (result) {
          context.commit("setUser", {
            msg,
            result
          });
          cookies.set("LegitUser", {
            msg,
            token,
            result,
          });
          AuthenticateUser.applyToken(token);
          sweet({
            title: msg,
            text: `Login successful,
            ${result?.firstName} ${result?.lastName}`,
            icon: "success",
            timer: 2000,
          });
          router.push({
            name: "home"
          });
        } else {
          sweet({
            title: "info",
            text: msg,
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "Login Failed.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // fetch all products
    async fetchProducts(context) {
      try {
        let {
          results
        } = (await axios.get(`${invURL}products`)).data;
        if (results) {
          context.commit("setProducts", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving products.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // fetch single product
    async fetchProduct(context, packet) {
      try {
        let {
          result
        } = (await axios.get(`${invURL}products/${packet?.id}`))
        .data;
        if (result) {
          context.commit("setProduct", result);
        } else {
          sweet({
            title: "Retrieving a single product",
            text: "Product was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // delete product
    async deleteProduct({
      commit,
      dispatch
    }, packet) {
      try {
        await axios.delete(`${invURL}products/delete/${packet.id}`);
        commit("setProducts");
        dispatch("fetchProducts");
        sweet({
          title: "Delete product",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting a product.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // add new product
    async addProduct(context, packet) {
      try {
        let {
          message
        } = await (
          await axios.post(`${invURL}products/addProduct`, packet)
        ).data;
        console.log(message);
        context.dispatch("fetchProducts");
        sweet({
          title: "Registration",
          text: message,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // fetch all suppliers
    async fetchSuppliers(context) {
      try {
        let {
          results
        } = (await axios.get(`${invURL}suppliers`)).data;
        if (results) {
          context.commit("setSuppliers", results);
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when retrieving suppliers.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // fetch single supplier
    async fetchSupplier(context, packet) {
      try {
        let {
          result
        } = (await axios.get(`${invURL}suppliers/${packet?.id}`))
        .data;
        if (result) {
          context.commit("setSupplier", result);
        } else {
          sweet({
            title: "Retrieving a single supplier",
            text: "Supplier was not found",
            icon: "info",
            timer: 2000,
          });
        }
      } catch (e) {
        sweet({
          title: "Error",
          text: "A product was not found.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // delete supplier
    async deleteSupplier({
      commit,
      dispatch
    }, packet) {
      try {
        await axios.delete(`${invURL}suppliers/delete/${packet.id}`);
        commit("setSuppliers");
        dispatch("fetchSuppliers");
        sweet({
          title: "Delete supplier",
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "An error occurred when deleting supplier.",
          icon: "error",
          timer: 2000,
        });
      }
    },

    // add new supplier
    async addSupplier(context, packet) {
      try {
        let {
          message
        } = await (
          await axios.post(`${invURL}suppliers/addSupplier`, packet)
        ).data;
        console.log(message);
        context.dispatch("fetchSuppliers");
        sweet({
          title: "Registration",
          text: message,
          icon: "success",
          timer: 2000,
        });
      } catch (e) {
        sweet({
          title: "Error",
          text: "Please try again later",
          icon: "error",
          timer: 2000,
        });
      }
    },
  },
  modules: {}
})