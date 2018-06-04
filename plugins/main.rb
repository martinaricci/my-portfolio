require 'sinatra'
require 'sinatra/reloader'
require 'pg'


def run_query(sql)
  conn = PG.connect(dbname: 'portfolio')
  result = conn.exec(sql)
  conn.close
end

post '/contact-me' do 
    sql = "INSERT INTO portfolios (name, email, message) VALUES ('#{params[:name]}', '#{params[:email]}', '#{params[:message]}');"
    run_query(sql)
end