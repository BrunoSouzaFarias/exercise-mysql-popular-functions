SELECT last_name, hire_date
FROM funcionarios
WHERE YEAR(hire_date) = 1987 AND MONTH(hire_date) = 7;
