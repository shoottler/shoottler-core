const state = { config: {} }

function initialState () {
  return { config: {} }
}

const mutations = {
  set (state, { key, value }) {
    _.set(state, key, value)
  },
  reset (state) {
    const s = initialState()
    Object.keys(s).forEach((key) => {
      state[key] = s[key]
    })
  },
}
const actions   = {
  index ({ dispatch, rootState }) {
    return new Promise((resolve, reject) => {
      dispatch('asyncCall', {
        method   : 'get',
        url      : '/resources/',
        params   : { company_id: rootState.company.activeCompany.id },
        canCommit: false,
      }, { root: true }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  show ({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      dispatch('asyncCall', {
        method   : 'get',
        url      : `/resources/${id}`,
        canCommit: false,
      }, { root: true }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  store ({ dispatch }, data) {
    return new Promise((resolve, reject) => {
      dispatch('asyncCall', {
        method   : 'post',
        url      : '/resources/create',
        data     : data,
        canCommit: false,
      }, { root: true }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  update ({ dispatch }, { id, resource }) {
    return new Promise((resolve, reject) => {
      dispatch('asyncCall', {
        method   : 'put',
        url      : `/resources/${id}/update`,
        data     : resource,
        canCommit: false,
      }, { root: true }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },
  destroy ({ dispatch }, id) {
    return new Promise((resolve, reject) => {
      dispatch('asyncCall', {
        method   : 'delete',
        url      : `/resources/${id}`,
        canCommit: false,
      }, { root: true }).then((response) => {
        resolve(response)
      }).catch((err) => {
        reject(err)
      })
    })
  },
}
export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
