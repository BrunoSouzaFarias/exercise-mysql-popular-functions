SELECT job_id, SUM(salary) AS total_pago_por_profissao
FROM funcionarios
GROUP BY job_id;
