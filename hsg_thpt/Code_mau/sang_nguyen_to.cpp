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
    int m; cin>>m;
    vector<bool> prime(m+1,true);
    prime[0]=false; if(m>=1) prime[1]=false;
    for(ll p=2;p*p<=m;p++) if(prime[p])
        for(ll j=p*p;j<=m;j+=p) prime[j]=false;
    bool first=true;
    for(int x=2;x<=m;x++) if(prime[x]){
        if(!first) cout<<' '; first=false; cout<<x;
    }
    cout<<'\n';
}
