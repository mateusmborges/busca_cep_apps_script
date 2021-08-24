# busca_cep_apps_script
Um simples passo a passo em Apps Script para consumir dados da API do Google Maps via biblioteca Maps.


Tudo o que você vai precisar pra reproduzir o código:
- Fazer uma cópia [dessa planilha](https://docs.google.com/spreadsheets/d/1Imxm9VjMUnowV-XgLzawTI_2KZ0pSX7Nl6X93a4KQds/edit?usp=sharing)
- Dentro da sua cópia, clicar no menu `Ferramentas` e depois em `Editor de Script`.


## Funcionalidade

Interface simples na planilha, com um local para entrada e um local para saída, com um botão no meio.


## Segurança

O script pede autorização necessária para ler a planilha que você fez a cópia. O escopo do Planilhas necessário é o https://www.googleapis.com/auth/spreadsheets.currentonly.
