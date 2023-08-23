SELECT
    first_name,
    last_name,
    DATEDIFF(NOW(), hire_date) AS tempo_trabalho_dias
FROM funcionarios;
