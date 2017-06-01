const breakpoints = {
    xs: 4,
    sm: 8,
    md: 8,
    lg: 12
};

function generateSize(size) {
    const cols = breakpoints[size];
    let html = `<h1>${size} <small>${cols} cols</small></h1>`;
    html += `<div class="container-fluid">`;

    for (let i = 1; i <= cols; i++) {
        const fillColsCount = cols - i;

        html += `<div class="row">`;
        // "main" col
        html += `<div class="col-${size}-${i}"><div>col-${size}-${i}</div></div>`;

        // fill cols
        for (let j = 0; j < fillColsCount; j++) {
            html += `<div class="col-${size}-1"><div>col-${size}-1</div></div>`;
        }

        html += `</div>`; // row
    }

    html += `</div>`; // container
    return html;
}

function generate() {
    let result = '';
    for (size of Object.keys(breakpoints)) {
      result += generateSize(size)
    }
    return result
}

console.log(generate())
