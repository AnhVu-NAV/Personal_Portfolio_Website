#include <iostream>
#include <vector>
#include <string>
#include <algorithm>
#include <queue>
#include <map>
#include <unordered_map>
#include <set>
#include <numeric>
#include <limits>
#include <tuple>
#include <array>
#include <stack>
#include <deque>
#include <cstdint>
#include <cmath>
#include <functional>
#include <iomanip>
#include <sstream>
using namespace std;
using ll = long long;

int main(){
    ios::sync_with_stdio(false);cin.tie(nullptr);
    int m,n;cin>>m>>n;vector<string>a(m);for(auto&s:a)cin>>s;
    vector<vector<bool>>seen(m,vector<bool>(n));
    int cnt=0,best=0;int dx[]={-1,1,0,0},dy[]={0,0,-1,1};
    for(int i=0;i<m;i++)for(int j=0;j<n;j++)if(!seen[i][j]){
        cnt++;int sz=0;queue<pair<int,int>>q;q.push({i,j});seen[i][j]=true;
        while(!q.empty()){
            auto [x,y]=q.front();q.pop();sz++;
            for(int k=0;k<4;k++){int u=x+dx[k],v=y+dy[k];
                if(u>=0&&u<m&&v>=0&&v<n&&!seen[u][v]&&a[u][v]==a[x][y]){
                    seen[u][v]=true;q.push({u,v});}
            }
        }
        best=max(best,sz);
    }
    cout<<cnt<<'\n'<<best<<'\n';
}
