export const render = (listings) => {
    document.getElementById('root').innerHTML = `<p>good luck</p>`
}

export const renderError = (err = 'Error processing request') => {
    document.getElementById('root').innerHTML = `
        <div>${err}</div>
    `;
}