import {Link} from 'react-router-dom'

function Sidebar(){

return ( <nav>
        <ul>
          <li> 
            <Link to ='/'> Home </Link> {/*  '/'는 첫페이지를 의미한다. */}
          </li>
          <li>
            <Link to = '/about'>MyPage</Link>
          </li>
          <li>
            <Link to = '/dashboard'> Dashboard </Link>
          </li>
        </ul>
      </nav>
)}
export default Sidebar