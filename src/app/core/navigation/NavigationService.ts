import React from 'react'

export const navigationRef = React.createRef<any>()

const navigate = (routeName: string, params: any, action: any) => {
  navigationRef.current?.navigate(routeName, params, action)
}

export default {
  navigate,
}
