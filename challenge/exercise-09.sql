SELECT job_id, AVG(salary) AS media_salario
FROM funcionarios
WHERE job_id != 'it_prog'
GROUP BY job_id
ORDER BY media_salario DESC;
