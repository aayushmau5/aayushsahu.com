---
title: "NextJS: Redirect based on Auth and certain conditions"
description: ""
date: 2021-12-19T16:58:40.941Z
tags: []
cover:
	image: "/blogImages/"
	alt: ""
	caption: ""
draft: true 
---

```jsx
import { useRouter } from "next/router";

import useAuthContext from "components/contexts/useAuthContext";

export default function Redirect({
  children,
  hideAfterLogin,
  requireIdentity,
  requiredIdentity,
}) {
  const { isLoggedIn, identity } = useAuthContext();
  const router = useRouter();

  if (isLoggedIn && hideAfterLogin) {
    router.push("/dashboard");
  } else if (isLoggedIn && identity && requireIdentity) {
    if (requiredIdentity) {
      if (identity !== requiredIdentity) {
        router.push("/dashboard");
      } else {
        return <>{children}</>;
      }
    } else {
      <>{children}</>;
    }
  } else {
    return <>{children}</>;
  }

  return null;
}
```
