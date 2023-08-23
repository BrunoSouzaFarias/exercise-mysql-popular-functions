SELECT department_id, 
       COUNT(*) AS numero_funcionarios,
       AVG(salary) AS media_salario
FROM funcionarios
GROUP BY department_id
HAVING COUNT(*) > 10;
