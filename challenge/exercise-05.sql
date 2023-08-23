SELECT
    ROUND(MAX(salary), 2) AS maior_salario,
    ROUND(MIN(salary), 2) AS menor_salario,
    ROUND(SUM(salary), 2) AS soma_salarios,
    ROUND(AVG(salary), 2) AS media_salarios
FROM funcionarios;
