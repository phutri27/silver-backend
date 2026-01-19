--
-- PostgreSQL database dump
--

\restrict YhNHvnawshqXrlMtXd73Ng13NS5z4YwGDurFLiLrGGEKyW7zCz8A4IPh7uuIDVF

-- Dumped from database version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)
-- Dumped by pg_dump version 16.11 (Ubuntu 16.11-0ubuntu0.24.04.1)

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: silver; Type: TABLE; Schema: public; Owner: phu50
--

CREATE TABLE public.silver (
    id integer NOT NULL,
    brand character varying(255),
    quantity integer,
    base_price integer
);


ALTER TABLE public.silver OWNER TO phu50;

--
-- Name: silver_id_seq; Type: SEQUENCE; Schema: public; Owner: phu50
--

ALTER TABLE public.silver ALTER COLUMN id ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public.silver_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- Data for Name: silver; Type: TABLE DATA; Schema: public; Owner: phu50
--

COPY public.silver (id, brand, quantity, base_price) FROM stdin;
19	Phu Quy	5	2551000
20	Phu Quy	5	2606000
21	Phu Quy	1	3413000
22	KNP	1	2329000
23	KNP	1	3328000
24	KNP My Nghe	1	2880000
26	KNP	1	2863000
27	Ancarat	1	2829000
28	Ancarat	2	3050000
29	KNP My Nghe	1	2500000
30	KNP My Nghe	2	3553000
\.


--
-- Name: silver_id_seq; Type: SEQUENCE SET; Schema: public; Owner: phu50
--

SELECT pg_catalog.setval('public.silver_id_seq', 30, true);


--
-- Name: silver silver_pkey; Type: CONSTRAINT; Schema: public; Owner: phu50
--

ALTER TABLE ONLY public.silver
    ADD CONSTRAINT silver_pkey PRIMARY KEY (id);


--
-- PostgreSQL database dump complete
--

\unrestrict YhNHvnawshqXrlMtXd73Ng13NS5z4YwGDurFLiLrGGEKyW7zCz8A4IPh7uuIDVF

