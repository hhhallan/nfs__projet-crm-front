/* * * * * * * * * * *
*  test
* * * * * * * * * * * */

export const lineChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Sales',
        data: [25, 20, 30, 35, 40, 45],
        backgroundColor: 'rgba(0, 0, 255, 0.2)',
        borderColor: 'rgba(0, 0, 255, 1)'
    }]
};

export const lineChartOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Line Chart',
            font: {
                family: "Poppins"
            }
        },
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
};

export const barChartData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [{
        label: 'Revenue',
        data: [25, 20, 30, 35, 40, 45],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)'
    }]
};

export const barChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Bar Chart',
            font: {
                family: "Poppins"
            }
        },
    },
};

/* * * * * * * * * * *
*  Devis & Factures - BAR
* * * * * * * * * * * */
export const devisFactureOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'top' as const,
        },
        title: {
            display: true,
            text: 'Devis / Factures',
            font: {
                family: "Poppins"
            }
        },
    },
};

/* * * * * * * * * * *
*  test - Line
* * * * * * * * * * * */

export const testLineOptions = {
    responsive: true,
    plugins: {
        title: {
            display: true,
            text: 'Devis / Factures',
            font: {
                family: "Poppins"
            }
        },
    }
};