//HOC - Higher Order Component

import { useParams } from "react-router-dom";

const withRouter = WrappedComponent => props => {
        
    //react-router-dom v6 hooks
    const params = useParams();
    
    return <WrappedComponent {...props} params={params} />
}

export default withRouter