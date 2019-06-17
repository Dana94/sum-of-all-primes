const state = {
  maxNumber: 10,
  numbers: [],
  primes: [
    { number: 2, color: "#00A0FF" }, // 2, 4, 6, 8, 10
    { number: 3, color: "yellow" }, // 3, 9
    { number: 5, color: "green"  }, // 5
    { number: 7, color: "red"    }  // 7
  ]
};

const mutations = {
  ADD_PRIME(state, { number }) {
    state.primes.push(number);
  },
  ADD_NUMBER(state, { number }) {
    state.numbers.push(number);
  }
};

const actions = {
  addPrime({ commit }, payload) {
    commit("ADD_PRIME", payload);
  },
  addNumber({ commit }, payload) {
    commit("ADD_NUMBER", payload);
  }
};

const getters = {
  getMaxNumber(state) {
    return state.maxNumber;
  },
  getPrimes(state) {
    return state.primes;
  }
};

export default {
  state,
  mutations,
  actions,
  getters
};
