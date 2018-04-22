export default function stateMethodBundler(props) {
    return {
        path: props.path,
        ...props
    }
};