import { PERMISSIONS } from '../Enums/PermissionEnums';
import UserContainer from './UserContainer';

const UserRouter = [
    {
        path: '/users',
        permission: PERMISSIONS.USER_PERMISSION,
        component: UserContainer
    }
]

export default UserRouter;