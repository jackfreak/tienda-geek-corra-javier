/**
 * Loader component.
 *
 * @author Javier Alejandro Corra
 */


const Loader = () => {
    return (
        <div className='spinner-border text-primary' role='status'>
            <span className='visually-hidden'>Cargando...</span>
        </div>
    );
};


export {
    Loader
}
