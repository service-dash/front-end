import http from '@/utils/api'
import { useMutation, useQuery } from '@tanstack/react-query'
import { AuthenticationReturnedPayload, IUser, IWorkspace, Subscription } from './interfaces'
import { queryClient } from '@/utils/react-query'

export const useLoginGoogle = () => useMutation<AuthenticationReturnedPayload, any, { code: string }>({
  mutationFn: ({ code }) => http.post({
    url: "/auth/oauth/google",
    body: { code }
  })
})

export const useLoginGithub = () => useMutation<AuthenticationReturnedPayload, any, { code: string }>({
  mutationFn: ({ code }) => http.post({
    url: "/auth/oauth/github",
    body: { code }
  })
})

export const useLogin = () => useMutation<AuthenticationReturnedPayload, any, { email: string, password: string }>({
  mutationFn: ({ email, password }) => http.post({
    url: "/auth/login-with-email",
    body: { email, password }
  })
})


export const useForgotPassword = () => useMutation<AuthenticationReturnedPayload, any, { email: string }>({
  mutationFn: ({ email }) => http.post({
    url: "/auth/forgot-password",
    body: { email }
  })
})

export const useResetPassword = () => useMutation<AuthenticationReturnedPayload, any, { password: string, recoveryToken: string }>({
  mutationFn: ({ password, recoveryToken }) => http.post({
    url: "/auth/reset-password",
    body: { password, recoveryToken }
  })
})

export const useSignup = () => useMutation<AuthenticationReturnedPayload, any, { email: string, password: string }>({
  mutationFn: ({ email, password }) => http.post({
    url: "/auth/signup-with-email",
    body: { email, password }
  })
})

export const useOnboard = () => useMutation<Pick<AuthenticationReturnedPayload, "defaultWorkspace" | "forgeId" | "user">, any, { avatar: string, firstName: string, lastName: string }>({
  mutationFn: ({ avatar, firstName, lastName }) => http.post({
    url: "/accounts/onboard",
    body: { avatar, firstName, lastName }
  })
})


export const useUpdateAccount = () => useMutation<{ data: IUser }, any, { avatar: string, firstName: string, lastName: string }>({
  mutationFn: ({ avatar, firstName, lastName }) => http.put({
    url: "/accounts",
    body: { avatar, firstName, lastName }
  })
})

export const useUpdateAccountPassword = () => useMutation<{ data: IUser }, any, { newPassword: string, oldPassword: string }>({
  mutationFn: ({ newPassword, oldPassword }) => http.post({
    url: "/accounts",
    body: { newPassword, oldPassword }
  })
})


export const useFetchWorkspaces = () => useQuery<any, any, { data: IWorkspace[] }>({
  queryKey: ['workspaces'],
  queryFn: () => http.get({
    url: "/workspaces"
  })
})

export const useFetchSingleWorkspace = (id: string) => useQuery<any, any, { data: IWorkspace | null }>({
  queryKey: ['workspace', id],
  queryFn: () => http.get({
    url: "/workspaces/" + id
  })
})

export const useCreateWorkspace = () => useMutation<{ data: IWorkspace }, any, { title: string }>({
  mutationFn: ({ title }) => http.post({
    url: "/workspaces",
    body: { title }
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['workspaces']
    })
  }
})

export const useUpdateWorkspace = () => useMutation<{ data: IWorkspace }, any, { title: string, avatar?: string, members?: { account: string, status: string }[], id: string }>({
  mutationFn: ({ title, id, members, avatar }) => http.patch({
    url: "/workspaces/" + id,
    body: { title, members, avatar }
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['workspaces']
    })
  }
})


export const useLeaveWorkspace = () => useMutation<{ data: IWorkspace }, any, { id: string }>({
  mutationFn: ({ id }) => http.delete({
    url: "/workspaces/" + id + "/leave"
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['workspaces']
    })
  }
})




export const useTransferWorkspace = () => useMutation<{ data: IWorkspace }, any, { account: string, id: string }>({
  mutationFn: ({ account, id }) => http.put({
    url: "/workspaces/" + id,
    body: { account }
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['workspaces']
    })
  }
})


export const useDeleteWorkspace = () => useMutation<{ message: string }, any, { id: string }>({
  mutationFn: ({ id }) => http.delete({
    url: "/workspaces/" + id,
  }),
  onSuccess: () => {
    queryClient.invalidateQueries({
      queryKey: ['workspaces']
    })
  }
})




export const useDeleteAccount = () => useMutation<{ message: string }, any>({
  mutationFn: () => http.delete({
    url: "/accounts/",
  }),
  onSuccess: () => {

  }
})




export const useFetchActiveSubscription = () => useQuery<any, any, { data: Subscription | null }>({
  queryKey: ['active-subscription'],
  queryFn: () => http.get({
    url: "/subscriptions/active"
  })
})
