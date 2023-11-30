import { appFirebase } from '../config/firebase.config'

import { getAuth, signOut } from '@firebase/auth'

const auth = getAuth(appFirebase);


const Auth = () => {
  return (
    <div>
          <button onClick={()=>signOut(auth)}>Logout</button>
    </div>
  )
}

export default Auth