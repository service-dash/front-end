import { create } from "zustand"
import { createJSONStorage, persist } from "zustand/middleware"
import { } from "zustand/context"
import { AuthStoreInterface } from './interfaces'

export const useAuthenticationStore = create(
  persist<AuthStoreInterface>(
    (set, get) => ({
      user: null,
      access: null,
      refresh: null,
      maxForges: 0,
      maxWorkspaces: 0,
      defaultWorkspace: null,
      setUser (user) {
        set({ user })
      },
      setAccess (token) {
        set({ access: token })
      },
      setRefresh (token) {
        set({ refresh: token })
      },
      setDefaultWorkspace (wkspace) {
        set({ defaultWorkspace: wkspace })
      },
      setMaxForges (val) {
        set({ maxForges: val })
      },
      setMaxWorkspaces (val) {
        set({ maxWorkspaces: val })
      },
    }),
    {
      name: "authorization-storage",
      storage: createJSONStorage(() => localStorage),
    }
  )
)
