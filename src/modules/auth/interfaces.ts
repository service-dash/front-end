export interface IUser {
  id: string
  firstName: string
  lastName: string
  email: string
  isEmailVerified: boolean
  passwordIsSet: boolean
  avatar?: string
}

export enum MembershipStatus {
  PENDING = "pending",
  ACCEPTED = 'accepted',
  ADDED = 'added'
}

export interface Workspacemembership {
  account: IUser
  status: MembershipStatus
}

export interface IWorkspace {
  id: string
  account: string
  title: string
  members: Workspacemembership[]
  avatar?: string
}

export interface TokenPayload {
  token: string
  expires: Date
}
export interface AuthStore {
  user: IUser | null
  access: TokenPayload | null
  refresh: TokenPayload | null
  defaultWorkspace: IWorkspace | null
  maxForges: number
  maxWorkspaces: number
}

export interface AuthenticationReturnedPayload {
  forgeId?: string,
  onboard?: boolean
  defaultWorkspace: IWorkspace,
  user: IUser,
  tokens: {
    access: TokenPayload,
    refresh: TokenPayload
  }
}



export enum PlanPeriods {
  MONTHLY = "monthly",
  ANNUALLY = "annually"
}

export interface SubscriptionPlan {
  disabled: boolean
  name: string
  description: string
  price: number
  period: PlanPeriods
}


export enum SubscriptionStatus {
  ACTIVE = "active",
  INACTIVE = "inactive",
  GRACE = "grace-period"
}
export interface Subscription {
  account: string | IUser
  plan: string | SubscriptionPlan
  status: SubscriptionStatus
  expires: Date
}

export interface SubscribePayload {
  planId: string
  numberOfMonths: number
}


export interface AuthStoreInterface extends AuthStore {
  setUser: (user: IUser | null) => void
  setAccess: (token: TokenPayload | null) => void
  setRefresh: (token: TokenPayload | null) => void
  setDefaultWorkspace: (wkspace: IWorkspace | null) => void
  setMaxForges: (val: number) => void
  setMaxWorkspaces: (val: number) => void
}