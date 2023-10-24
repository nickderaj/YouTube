type Props = {
  users: {
    id: number;
    name: string;
    role: 'admin' | 'user';
  }[];
};

const ObjectPropComponent: React.FC<Props> = ({ users }) => {
  return <div>
    {users.map((user) => (
      <div key={user.id}>
        <p>{user.id}</p>
        <p>{user.name}</p>
        <p>{user.role === 'admin' ? 'hello' : 'no'}</p>
      </div>
    ))}
  </div>;
};

export default ObjectPropComponent;


const myName: string = 'Nick';
const powerLevel: number = 9001;

console.log(myName, powerLevel)